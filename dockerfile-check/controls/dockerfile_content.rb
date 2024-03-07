# copyright: 2018, The Authors

title "Dockerfile validation"

control 'dockerfile' do
  title 'Ensure Dockerfile has the correct contents'
  desc  'Validate the structure and contents of the dockerfile.'
  describe file('Dockerfile') do
    its('content') { should match /^FROM node:21-alpine/ }
    its('content') { should match /^WORKDIR \/usr\/src\/app/ }
    its('content') { should match /^ENV NODE_ENV=production/ }
    its('content') { should match /^COPY package\*\.json \.\// }
    its('content') { should match /^RUN npm ci/ }
    its('content') { should match /^COPY src\/ \.\/src\// }
    its('content') { should match /^COPY tsconfig.json \.\// }
    its('content') { should match /^RUN npm run build/ }
    its('content') { should match /^EXPOSE 3000/ }
    its('content') { should match /^CMD \[ "node", "dist\/api.js" \]/ }
  end
end