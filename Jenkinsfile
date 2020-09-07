pipeline {
    agent { label 'linux'}
    stages{
        stage ('test'){  
            agent {docker 'node:12-stretch'} 
            steps {
               
               sh 'npm install'
               sh 'npm run test'
            }
        }
    }
}