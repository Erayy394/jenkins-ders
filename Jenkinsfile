pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Erayy394/jenkins-ders.git'  // GitHub reposundan proje çekme
            }
        }
        stage('Build') {
            steps {
                echo '📦 Proje bağımlılıkları yükleniyor...'
                bat 'npm install'  // Windows için
                // sh 'npm install' // Linux/macOS için
            }
        }
        stage('Test') {
            steps {
                echo '🧪 Testler çalıştırılıyor...'
                script {
                    def testResult = bat(returnStatus: true, script: 'npm test')
                    if (testResult != 0) {
                        error "🔥 Testler başarısız oldu! Pipeline durduruluyor."
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo '🚀 Uygulama deploy ediliyor...'
                script {
                    sh 'pm2 stop app || true'  // PM2 ile eski uygulamayı durdur
                    sh 'pm2 start app.js'      // Yeni uygulamayı başlat
                }
            }
        }
    }
}
