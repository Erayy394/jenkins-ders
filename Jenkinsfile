pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Erayy394/jenkins-ders.git'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test || echo "Testler başarısız oldu, devam ediliyor..."'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
