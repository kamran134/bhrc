pipeline {
    agent any

    stages {
        stage('Build docker image. Run tests and build app.') {
            steps {
                git 'https://github.com/kamran134/bhrc'
                sh 'sudo docker build -t bhrc-frontend-2:prod -f Dockerfile.prod .'
            }
        }
    }
}