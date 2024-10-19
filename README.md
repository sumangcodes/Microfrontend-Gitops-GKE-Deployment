Microfrontend Architecture with GKE Deployment and GitOps
This repository demonstrates the deployment of a microfrontend-based e-commerce system using Webpack Module Federation. The application consists of independent microfrontends for the Product Catalog, Shopping Cart, and a Container App, deployed on Google Kubernetes Engine (GKE) using GitOps practices.

Table of Contents
Project Overview

Microfrontend Setup

Architecture

Prerequisites

Deployment Steps

How to Use

Contributing

License

Project Overview
This project leverages Webpack Module Federation to create a modular architecture where each microfrontend is independently deployable. We use GKE to host the microservices and GitOps tools (e.g., ArgoCD) to manage deployments.

Features
Modular Microfrontends: ProductCatalog and ShoppingCart are separate apps, integrated via Module Federation.

Event Communication: Uses window events to share state across microfrontends.

GitOps Deployment: Automated deployment to GKE using ArgoCD.

Google Cloud Integration: Fully hosted on GKE with ingress-based routing.

Microfrontend Setup
Microfrontends in this repository:

ProductCatalog: Displays a list of products.

ShoppingCart: Manages the cart and displays the total price.

Container App: Hosts the microfrontends and manages routing.

Each microfrontend is independently deployable and communicates through window events (e.g., add-to-cart).

Architecture
plaintext

Copy
               +----------------------+
               |   Container App      |
               |      (Main Host)     |
               +----------------------+
                     |        |
        ---------------+        +----------------
     |                                      |
+-------------+                    +------------------+
| ProductCatalog |                |  ShoppingCart     |
|   (Remote App)   |                |  (Remote App)   |
+-------------+                    +------------------+
Ingress Controller: Routes requests to microfrontends.

Module Federation: Integrates microfrontends at runtime.

GitOps (ArgoCD): Syncs deployments from the Git repository.

Prerequisites
Docker installed locally.

kubectl and gcloud CLI installed.

A GKE cluster running on Google Cloud.

ArgoCD installed on the GKE cluster for GitOps-based deployment.

Deployment Steps
Clone the Repository

bash

Copy
git clone https://github.com/sumangcodes/Microfrontend-DesignSystem-WindowEvents.git
cd Microfrontend-DesignSystem-WindowEvents
Build Docker Images Build and push the Docker images to Google Artifact Registry (or any Docker registry).

bash

Copy
docker build -t gcr.io/<PROJECT_ID>/container-app:latest ./container-app
docker build -t gcr.io/<PROJECT_ID>/product-catalog:latest ./product-catalog
docker build -t gcr.io/<PROJECT_ID>/shopping-cart:latest ./shopping-cart
docker push gcr.io/<PROJECT_ID>/container-app:latest
docker push gcr.io/<PROJECT_ID>/product-catalog:latest
docker push gcr.io/<PROJECT_ID>/shopping-cart:latest
Deploy Services and Ingress to GKE Apply the Kubernetes service and ingress configurations.

bash

Copy
kubectl apply -f k8s/product-catalog-service.yaml
kubectl apply -f k8s/shopping-cart-service.yaml
kubectl apply -f k8s/container-app-service.yaml
kubectl apply -f k8s/microfrontend-ingress.yaml
Set Up ArgoCD (GitOps)

Install ArgoCD on your GKE cluster.

Add your GitHub repository to ArgoCD.

Sync the manifests with your GKE cluster.

How to Use
Access Microfrontends:
ProductCatalog: product-catalog.example.com

ShoppingCart: shopping-cart.example.com

Container App: container-app.example.com

Add Items to Cart:
Click the "Add to Cart" button on a product in the ProductCatalog. The product will appear in the ShoppingCart, along with the total price.

Code Explanation
Webpack Configuration for Module Federation
javascript

Copy
new ModuleFederationPlugin({
  name: "ContainerApp",
  filename: "remoteEntry.js",
  remotes: {
    ProductCatalog: 'ProductCatalog@http://product-catalog.example.com/remoteEntry.js',
    ShoppingCart: 'ShoppingCart@http://shopping-cart.example.com/remoteEntry.js',
  },
});
This configuration ensures the microfrontends are fetched dynamically from their deployed services in GKE.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a feature branch.

Commit your changes.

Submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to the developers of Webpack Module Federation, ArgoCD, and GKE for providing tools that make modern development easier.
