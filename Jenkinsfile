pipeline {
    agent {
        label 'master'
    }
    tools {nodejs "node"}
    stages {

        stage(CleanCheckout) {
            steps {
                cleanWs();
                git 'https://github.com/TrishaChetani/CucumberWebdriverIO.git'
            }
        }
        stage(RunTest) {
            steps {
                sh "npm install"
                sh "npm test"
            }
        }
    }
    post {
        always {
            sh 'echo Success'
        }
        failure {
            sh 'echo Failure'
        }
    }
}
