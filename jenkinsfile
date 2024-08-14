pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t my-python-app .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Add your testing steps here, e.g., run pytest
                    sh 'echo "Running tests..."'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Run Docker container locally
                    sh 'docker run -d -p 5000:5000 my-python-app:latest'
                }
            }
        }
    }
}
