## Staff Schedule App API ##

* This is the API for ascheduler application given to me as an assignment for a job application. 
* It is implemented using Fastify and MongoDb

**Installation Instructions:**

* Install NodeJS on your computer (so that you have access to npm)
* Install MongoDB on your computer as a service
* Note that you might need to create the C:/data/db/ or /data/db/ directory on your computer for the MongoDB service to run
* create a .env file with the MONGODB_URI set to your MongoDB database (eg: MONGODB_URI=mongodb://127.0.0.1:27017/staff_db Where staff_db is the database name )
* Note: That "localhost" might not work depending on your system so 127.0.0.1 might need to be used instead
* From your app directory run: npm install

**To Start Backend API:**
* From the command prompt: mongod
* From the application directory: npm start (or alternatively: node src/app.js )

**Status (Things not working/incomplete):**
* The API is not working properly, posts to http://127.0.0.1:5000/GetWaiters will return {"waiters": []} and http://127.0.0.1:5000/GetCooks will return {"cooks": []}