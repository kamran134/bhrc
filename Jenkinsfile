pipeline {
    agent any

    stages {
        stage('Build docker image. Run tests and build app.') {
            steps {
                git 'https://github.com/kamran134/bhrc'
                sh 'docker build -t bhrc-frontend-2:test -f Dockerfile.test .'
            }
        }
    }
}