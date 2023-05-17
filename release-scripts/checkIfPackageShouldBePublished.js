/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const execSync = require("child_process").execSync;

function checkVersion(packageName, version) {
	// It is expected npm view will fail for packages that are about to be published. 2> dev/null/ is used to suppress the error.
	return execSync(`npm view ${packageName}@${version} 2> /dev/null`).toString().trim();
}

const path = require("path");
const libPath = path.join(__dirname, '..', process.argv[2]);

const { name, version } = require(`${libPath}/package.json`);

const versionIsPublished = checkVersion(name, version);

if (versionIsPublished) {
	process.exit(0);
} else {
	process.exit(1);
}