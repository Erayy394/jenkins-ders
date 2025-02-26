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
            }
        }
    }
}
