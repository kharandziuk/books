# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<-'SCRIPT'
# fix issue with dns on Vagrant
sudo rm /etc/resolv.conf
sudo sh -c 'echo "nameserver 8.8.8.8" >> /etc/resolv.conf'
sudo systemctl restart systemd-resolved
# add routing to docker registry on host machine. 10.0.2.2 is an IP of the host machine
sudo sysctl -w net.ipv4.conf.all.route_localnet=1
sudo iptables -t nat -A OUTPUT -p tcp --dport 5000 -j DNAT --to-destination 10.0.2.2:5000
sudo iptables -t nat -A POSTROUTING -j MASQUERADE
sudo /sbin/iptables-save
SCRIPT

Vagrant.configure("2") do |config|
  config.disksize.size = '10GB'
  config.vm.provider "virtualbox" do |v|
    v.memory = 2028
    v.cpus = 2
  end


  config.vm.define "server" do |machine|
    machine.vm.network "private_network", ip: "10.2.2.25"
    machine.vm.box = "ubuntu/bionic64"
    machine.vm.provision "shell", inline: $script
  end
end
