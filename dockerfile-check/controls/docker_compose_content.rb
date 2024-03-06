# copyright: 2018, The Authors

title "Docker compose validation"

control 'docker_compose' do
  title 'Ensure docker_compose has the correct contents'
  desc  'Validate the structure and contents of the docker_compose file.'
  describe file('docker-compose.yml') do
    its('content') { should match /^version: '3\.8'/ }
    its('content') { should match /^services:/ }
    its('content') { should match /^  tictactoe:/ }
    its('content') { should match /^    image: mathijs\/tictactoe:local/ }
    its('content') { should match /^    ports:/ }
    its('content') { should match /^      - "3000:3000"/ }
  end
end