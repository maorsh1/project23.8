pipeline {
    agent any

    stages {
        stage('Check Kubernetes Nodes') {
            steps {
                bat 'kubectl get nodes'
            }
        }
    }
}
