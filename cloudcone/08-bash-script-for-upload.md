---
title: 'Bash script for upload'
permalink: '/cloudcone/bash-script-for-upload'
---

# Bash script for upload

You can create a script file in order to make the pulling from the github server easier. The below file will <code>stop the pm2 gatsby app &gt; pull the changes from the github code base &gt; build the gatsby dispatch &gt; restart the pm2 app</code> .

```bash
#!/bin/bash

YELLOW='\033[1;33m'
GREEN='\033[1;32m'
NC='\033[0m' # No Color

clear
echo -e "\n\n${YELLOW}--Adding git files--${NC}\n"
git add .
echo -e "${YELLOW}--Commiting git files--${NC} \n"
git commit -m "automated upload"

echo -e "\n${YELLOW}--Pushing to Git Repository--${NC} \n"
RESULT=`git push 2>&1`

echo -e "${GREEN}Message: ${RESULT} \n\n"

if [ "$RESULT" = "Everything up-to-date" ]
then
    clear
    echo -e "\n\n -- Since everything is up-to-date, no need to connect to the server!--\n"
    echo -e "exiting....\n"
    exit 1
fi

echo -e "\n-------${GREEN}Connecting to the server-------${NC}\n"
ssh user@your_site.com <<EOF

echo -e "\n${GREEN}-------You are right now in cloudcone server and directory will be changed to /srv/gatsby------- ${NC}\n"

cd /srv/gatsby

echo -e "\n${GREEN}-------Stopping the gatsby application pm2 demon process....------- ${NC}\n"

pm2 stop gatsby

echo -e "\n${GREEN}-------pulling the branch from git------- ${NC}\n"

git pull

echo -e "\n\n${GREEN}-------building the gatsby build------- ${NC}\n"

gatsby build

echo -e "\n${GREEN}-------Starting the gatsby application pm2 demon process------- ${NC}\n"
pm2 start gatsby

EOF

echo -e "\n${YELLOW}-------Finished!!!!------- ${NC}\n"


```

By this, you can run the codes automatically with just single script.

you can run this script by typing <code>bash script.sh</code>
