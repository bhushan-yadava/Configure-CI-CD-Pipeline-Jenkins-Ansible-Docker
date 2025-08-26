# Jenkins + Docker + Ansible CI/CD Pipeline (From Scratch)

This project demonstrates a complete CI/CD pipeline using **Jenkins**, **Docker**, and **Ansible**, all configured from scratch without using pre-built Docker images or DockerHub.

---

## 📦 Project Structure

ci-cd-pipeline/
├── app/ # Sample application (e.g., Node.js app)
│ ├── Dockerfile
│ └── index.js
├── ansible/ # Ansible deployment files
│ └── deploy.yml
├── inventory # Ansible inventory file
├── Jenkinsfile # Jenkins pipeline script
└── README.md # Project documentation


---

## ⚙️ Tech Stack

- **Jenkins** (in Docker)
- **Docker** (for building and running app containers)
- **Ansible** (for remote deployment)
- **GitHub** (code hosting and webhook integration)
- **VirtualBox VM / RHEL** (target deployment server)

---

## 🛠 Local Setup

### 1. Install Required Tools

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [VirtualBox](https://www.virtualbox.org/)
- [Git Bash](https://gitforwindows.org/)
- [NGROK](https://ngrok.com/download) (for webhook testing)

### 2. Start Jenkins in Docker

docker run -d ^
  -p 8080:8080 ^
  -p 50000:50000 ^
  --name jenkins ^
  -v C:\jenkins_home:/var/jenkins_home ^
  -v //var/run/docker.sock:/var/run/docker.sock ^
  jenkins/jenkins:lts

  
### 3. Access Jenkins

URL: http://localhost:8080

Get admin password:

docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword

🔧 Setting Up the Remote VM (Target Server)

Inside the VM (RHEL or similar):

# Install Docker
sudo dnf install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# Install Ansible via pip (if subscription is unavailable)
sudo dnf install python3-pip -y
pip3 install --user ansible
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
source ~/.bashrc

🔐 SSH Setup (for Ansible)

On host (Git Bash):

ssh-keygen -t rsa
ssh-copy-id root@<vm-ip>


Test it:
ssh root@<vm-ip>

✅ Result

Pushing to GitHub triggers Jenkins

Jenkins builds Docker image

Jenkins runs Ansible to deploy to VM

App is deployed and accessible from the VM


🧠 Notes

No DockerHub or prebuilt images used — image is saved locally and transferred via Ansible

You can customize the app and playbook as needed

Make sure firewalls/SELinux are not blocking ports (especially 80 or 8080)
