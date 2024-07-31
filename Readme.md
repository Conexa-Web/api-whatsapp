chmod 400 "test-wsp.pem"
ssh -i "test-wsp.pem" ubuntu@ec2-54-224-197-253.compute-1.amazonaws.com

sudo apt update
sudo apt install -y nginx

sudo systemctl start nginx
sudo systemctl enable nginx

sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get install -y nodejs

git clone [url repo]
cd [nombre repo]
npm install
npm run dev


## aws EC2 habilitar puerto 3002
Red y seguridad
