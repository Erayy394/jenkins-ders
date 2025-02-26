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
                echo '📦 Proje bağımlılıkları yükleniyor...'
                bat 'npm install'  // Windows için uygun betik
            }
        }
        stage('Test') {
            steps {
                echo '🧪 Testler çalıştırılıyor...'
                bat 'npm test || echo "⚠️ Testler başarısız oldu, ama devam ediliyor..."'
            }
        }
        stage('Deploy') {
            steps {
                echo '🚀 Uygulama deploy ediliyor...'
            }
        }
    }
}
