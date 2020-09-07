pipeline {
    agent { label 'linux'}
    options { 
        timestamp()
        ansiColor("xterm")
    }
    stages{
        stage ('test'){   
            steps {
               sh 'npm install'
               sh 'npm run test'
            }
        }
    }
}