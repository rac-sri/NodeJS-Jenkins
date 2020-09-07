pipeline {
    agent { label 'linux'}
    stages{
        stage ('test'){   
            steps {
               sh 'npm install'
               sh 'npm run test'
            }
        }
    }
}