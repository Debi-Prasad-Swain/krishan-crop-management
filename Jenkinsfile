pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-token', url: 'https://github.com/Guddu090/krishan-crop-management.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('krishan-frontend')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker rm -f krishan-container || true'
                    sh 'docker run -d -p 3000:80 --name krishan-container krishan-frontend'
                }
            }
        }
    }
}
