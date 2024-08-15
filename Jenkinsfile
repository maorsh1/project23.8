pipeline {
    agent any
    environment {
        KUBECONFIG = 'C:\\Users\\97255\\.minikube\\config'
    }
    stages {
        stage('Check Kubernetes Nodes') {
            steps {
                bat 'kubectl get nodes'
            }
        }
    }
}
