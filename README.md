Overview
This project leverages Webpack Module Federation to build and deploy a microfrontend architecture where individual components (microfrontends) can be independently developed and deployed. The deployment is managed using ArgoCD with a GitOps workflow for seamless, automated sync to GKE.

Key Features
Independent Deployments: Each microfrontend (ProductCatalog, ShoppingCart, and ContainerApp) is containerized and deployable independently.
State Sharing via Events: State is shared across microfrontends using browser window events (e.g., add-to-cart).
ArgoCD-Driven GitOps: Deployment pipelines are automated through ArgoCD, ensuring all deployments stay in sync with the Git repository.
Cloud-Native Hosting: Hosted on GKE with Ingress managing external routing.
Microfrontend Setup
ProductCatalog: Displays products.
ShoppingCart: Manages and displays the cart.
Container App: Acts as the shell and orchestrates routing between microfrontends.
Each microfrontend communicates using browser window events to keep the architecture loosely coupled.
Deployment Steps
1. Clone the Repository
bash
Copy code
git clone https://github.com/sumangcodes/Microfrontend-DesignSystem-WindowEvents.git  
cd Microfrontend-DesignSystem-WindowEvents  
2. Build Docker Images
Containerize each microfrontend and push the images to Google Artifact Registry:

bash
Copy code
docker build -t gcr.io/<PROJECT_ID>/container-app:latest ./container-app  
docker build -t gcr.io/<PROJECT_ID>/product-catalog:latest ./product-catalog  
docker build -t gcr.io/<PROJECT_ID>/shopping-cart:latest ./shopping-cart  

docker push gcr.io/<PROJECT_ID>/container-app:latest  
docker push gcr.io/<PROJECT_ID>/product-catalog:latest  
docker push gcr.io/<PROJECT_ID>/shopping-cart:latest  
3. Deploy Services and Ingress on GKE
Apply Kubernetes configurations for each service and ingress:

bash
Copy code
kubectl apply -f k8s/product-catalog-service.yaml  
kubectl apply -f k8s/shopping-cart-service.yaml  
kubectl apply -f k8s/container-app-service.yaml  
kubectl apply -f k8s/microfrontend-ingress.yaml  
4. Set Up ArgoCD for GitOps
Install ArgoCD on your GKE cluster:
bash
Copy code
kubectl create namespace argocd  
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml  
Add your GitHub repository to ArgoCD and configure it to monitor deployments.
Sync the manifests with your GKE cluster using ArgoCD:
bash
Copy code
argocd app sync <APP_NAME>  
Usage
Access the Microfrontends
ProductCatalog: product-catalog.example.in
ShoppingCart: shopping-cart.example.in
Container App: container-app.example.in
Testing Functionality
Open the ProductCatalog microfrontend and click "Add to Cart" on any product.
Verify the product is added to the ShoppingCart microfrontend with the updated total price.
Code Details
Webpack Configuration for Module Federation
javascript
Copy code
new ModuleFederationPlugin({
  name: "ContainerApp",  // Name for the main container app
  filename: "remoteEntry.js",  // Remote entry for the container
  remotes: {
    ProductCatalog: 'ProductCatalog@http://product-catalog.example.in/remoteEntry.js',
    ShoppingCart: 'ShoppingCart@http://shopping-cart.example.in/remoteEntry.js',
  },
});
This configuration enables the ContainerApp to fetch remote modules dynamically from the deployed ProductCatalog and ShoppingCart services on GKE.

Contributing
Contributions are welcome! Please follow the steps below:

Fork this repository.
Create a feature branch (git checkout -b feature/new-feature).
Commit your changes (git commit -m "Add new feature").
Push to your fork (git push origin feature/new-feature).
Submit a pull request for review.
License
This project is licensed under the MIT License. See the LICENSE file for more information.

importants commands : 
Create key and cert 

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout sumangcodes-info.key -out sumangcodes-info.crt -subj "/CN=sumangcodes.info" -addext "subjectAltName=DNS:sumangcodes.info,DNS:*.sumangcodes.info"


sample port forwarding commands : 
kubectl port-forward pod/product-catalog-9cbcd86bc-xrgbv 8080:3000 -n sumanns                                                    

creation of secret tls :-
kubectl create secret tls sumangcodes-info-cert --cert=sumangcodes-info.crt --key=sumangcodes-info.key -n sumanns
C:\Users\ciphe\Projects\Microfrontend-Gitops-GKE-Deployment\react-microfrontend-communication-event\apps\k8s>kubectl get secrets -n sumanns
NAME                   TYPE                DATA   AGE
sumanexample-in-cert   kubernetes.io/tls   2      18s

Acknowledgments
A special thanks to the teams behind Webpack Module Federation, GKE, and ArgoCD for providing tools that power modern microfrontend architecture and GitOps workflows.

