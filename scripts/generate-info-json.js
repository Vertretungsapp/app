import { execSync } from 'child_process';
import fs from 'fs';

// Get version from package.json
const packageJson = JSON.parse(fs.readFileSync('package.json'));
const version = packageJson.version;

// Get git SHA
const gitSha = execSync('git rev-parse --short HEAD').toString().trim();

// Get current date
const currentDate = new Date();

// Construct JSON object
const buildInfo = {
	version: version,
	sha: gitSha + currentDate.getTime().toString().slice(-3),
	date: currentDate.toISOString()
};

// Write JSON object to file
fs.writeFileSync('static/info.json', JSON.stringify(buildInfo, null, 2), { encoding: 'utf-8' });

console.log('[BUILD] >> Build info JSON file generated successfully.');
