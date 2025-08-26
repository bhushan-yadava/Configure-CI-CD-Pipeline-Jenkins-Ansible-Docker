pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/bhushan-yadava/Configure-CI-CD-Pipeline-Jenkins-Ansible-Docker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh 'docker build -t app:latest .'
                    sh 'docker save app:latest -o ../app-image.tar'
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook -i inventory ansible/deploy.yml'
            }
        }
    }
}
