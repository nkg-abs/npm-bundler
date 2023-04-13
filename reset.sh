set -e
cd "$(dirname "$0")"

# Tasks
executeAdoptScript(){
	sh ./adopt.sh
}

cleanUp(){
	rm ./src/components/*
	rm ./adopt.*
	rm reset.sh
}

initializeGitDir(){
	git init
}

executeSetupScript(){
	sh ./setup.sh
}

initializeCommit(){
	git add .
	git commit -m "Initialized."
}

# Main
executeAdoptScript
cleanUp
initializeGitDir
executeSetupScript
initializeCommit
