
stage('Deploy to Kubernetes') {
    steps {
        sh '''
            kubectl set image deployment/ejs-profile-viewer ejs-profile-viewer=yash7100/ejs-profile-viewer:latest
            kubectl rollout status deployment/ejs-profile-viewer --timeout=180s
        '''
    }
}
