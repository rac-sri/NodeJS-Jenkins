pipeline {
    agent { label 'linux'}
    stages{
        stage ('test'){  
            agent {
                docker 
                {
                    image 'node:12-stretch' 
                    args '-u root'
                }
            } 
            steps {
               sh 'npm install'
               sh 'npm run test'
            }
        }
    }
}