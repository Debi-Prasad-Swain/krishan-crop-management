pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub'
        DOCKERHUB_USER = 'debiprasadswain09'
        FRONTEND_IMAGE = "${DOCKERHUB_USER}/krishan-frontend"
    }
    stages {
        stage('Clone Code') {
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
        stage('Push Image to Docker Hub') {
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



        stage('Deploy') {
            steps {
                sh "docker run -d -p 80:80 ${FRONTEND_IMAGE}:latest"
            }
        }
    }
    post {
        success {
            echo 'deployed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
