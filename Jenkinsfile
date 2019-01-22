pipeline {
    agent {
        label 'copernicus'
    }
    options {
        timeout(time: 1, unit: 'HOURS')
        sendSplunkConsoleLog()
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') { 
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh './jenkins/scripts/test.sh'
                }
            }
        }
        stage('Deliver') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                }
            }
        }
    }
}
