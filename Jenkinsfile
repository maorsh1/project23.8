pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "node-app:${env.BUILD_NUMBER}"
        KUBE_NAMESPACE = "dev"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/maorsh1/project20.8.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                script {
                    sh 'kubectl apply -f k8s/deployment.yaml'
                    sh 'kubectl apply -f k8s/service.yaml'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
