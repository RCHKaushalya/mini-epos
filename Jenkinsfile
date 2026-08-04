pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code already on disk for now'
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }
    }
}