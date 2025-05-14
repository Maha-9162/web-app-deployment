pipeline {
  agent any
  environment {
    IMAGE = 'your-dockerhub-username/nodejs-app'
  }
  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Maha-9162/web-app-deployment.git',
            credentialsId: 'github-pat'
      }
    }
    stage('Build Image') {
      steps {
        sh 'docker build -t $IMAGE .'
      }
    }
    stage('Push Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo "$PASS" | docker login -u "$USER" --password-stdin'
          sh 'docker push $IMAGE'
        }
      }
    }
    stage('Deploy to K8s') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
      }
    }
  }
}
