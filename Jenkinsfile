pipeline {
    agent { label 'linux'}
    tools {nodejs "node"}
    options {
        timestamps()
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