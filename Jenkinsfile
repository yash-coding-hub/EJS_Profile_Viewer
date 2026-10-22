
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/yash-coding-hub/EJS_Profile_Viewer.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ejs-profile-viewer .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_TOKEN'
                )]) {
                    sh '''
                        echo "$DOCKER_TOKEN" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag ejs-profile-viewer "$DOCKER_USER/ejs-profile-viewer:latest"
                        docker push "$DOCKER_USER/ejs-profile-viewer:latest"
                        docker logout
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    kubectl set image deployment/ejs-profile-viewer ejs-profile-viewer=$DOCKER_USER/ejs-profile-viewer:latest
                    kubectl rollout status deployment/ejs-profile-viewer --timeout=120s
                '''
            }
        }
    }
}

