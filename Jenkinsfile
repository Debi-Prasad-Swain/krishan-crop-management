pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub' // Jenkins credentials ID
        DOCKERHUB_USER = 'debiprasadswain09'
        FRONTEND_IMAGE = "${DOCKERHUB_USER}/krishan-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Debi-Prasad-Swain/krishan-crop-management.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${FRONTEND_IMAGE}:latest", ".")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKERHUB_CREDENTIALS}",
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    script {
                        sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        sh "docker push ${FRONTEND_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh "docker run -d -p 80:80 ${FRONTEND_IMAGE}:latest"
            }
        }
    }

    post {
        success {
            echo '✅ KRISHAN frontend build & deployment successful!'
        }
        failure {
            echo '❌ Build or deployment failed.'
        }
    }
}
