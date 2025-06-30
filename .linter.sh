#!/bin/bash
cd /home/kavia/workspace/code-generation/gradifyresume-landing-95795-e0c153a8/landing_page_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

