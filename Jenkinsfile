pipeline {
  
  agent any
  
  stages {
    stage("build docker image") {
      steps {
        echo "building the app"
        withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
          sh 'docker build -t salmahazal/fromjenkins:new .'
          sh "echo $PASS | docker login -u $USER --password-stdin"
          sh "docker push salmahazal/fromjenkins:new"
        }
      }
    }

    stage("deploy") {
      steps {
        echo "deploying the app"
      }
    }
  }
}
