pipeline {
    agent { label 'linux'}
    options {
        timestamps()
        ansiColor("xterm")
    }
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