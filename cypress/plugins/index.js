const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const percyHealthCheck = require('@percy/cypress/task')
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
	if (file !== 'cypress') {
		const pathToConfigFile = path.resolve('./cypress/config', `${file}.json`)
		return fs.readJson(pathToConfigFile)
	} else{
		const pathToConfigFile = path.resolve('./', `cypress.json`)
		return fs.readJson(pathToConfigFile)
	}
}

module.exports = (on, config) => {
	addMatchImageSnapshotPlugin(on, config)
	on('task', percyHealthCheck)
	on('file:preprocessor', cucumber())

	const file = config.env.configFile || 'cypress'
	return getConfigurationByFile(file)
}
