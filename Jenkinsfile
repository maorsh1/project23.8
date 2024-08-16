pipeline {
    agent any
    environment {
        KUBECONFIG = 'C:\\Users\\97255\\.minikube\\config'
        PATH = "C:\\Program Files\\Docker\\Docker\\Resources\\bin;${env.PATH}"
    }
    stages {
        stage('Check Kubernetes Nodes') {
            steps {
                bat 'kubectl get nodes'
            }
        }
        stage('Check Kubernetes Pods') { // שלב אופציונלי
            steps {
                bat 'kubectl get pods --all-namespaces'
            }
        }
        stage('Check Kubernetes Services') { // שלב אופציונלי
            steps {
                bat 'kubectl get services --all-namespaces'
            }
        }
    }
}
