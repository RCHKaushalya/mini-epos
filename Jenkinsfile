pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    eval $(minikube docker-env)
                    docker build -t mini-epos-backend:latest ./backend
                    docker build -t mini-epos-frontend:latest ./frontend
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    kubectl apply -f k8s/
                    kubectl rollout restart deployment/backend
                    kubectl rollout restart deployment/frontend
                '''
            }
        }
    }
}