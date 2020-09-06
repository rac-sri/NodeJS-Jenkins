pipeline {
    agent { label 'linux'}
    stages{
        stage ('test'){  
            agent {docker 'node:12-stretch-slim'} 
            steps {
               sh 'npm run test'
            }
        }
    }
}