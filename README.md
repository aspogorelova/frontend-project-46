### Hexlet tests and linter status:
[![hexlet-check](https://github.com/aspogorelova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/aspogorelova/frontend-project-46/actions/workflows/hexlet-check.yml)

<a href="https://codeclimate.com/github/aspogorelova/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/0e1629559643fa2211b4/maintainability" /></a>

<a href="https://codeclimate.com/github/aspogorelova/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0e1629559643fa2211b4/test_coverage" /></a>

# Difference calculator

This program finds differences between two files in json and yaml format.  
By default, the result of the comparison is displayed in a convenient format:
+ \"+" means that an element has been added,
+ \"-"  means that an element has been removed,
+ without a sign means that an element will not change.
Optionally, you can choose text format "plain" or json format.

## Requirement

Node.js 19+

## 🏗 Installation

Run next commands:
```sh
git clone git@github.com:aspogorelova/frontend-project-46.git
```
```sh
cd frontend-project-46/
```
```sh
make install
```
```sh
sudo npm link
```

## 🚨 Helper
```sh
gendiff -h
```

## 🚀 Start program
Default format
```sh
gendiff <name of file1> <name of file2> 
```

Plain format
```sh
gendiff --format plain <name of file1> <name of file2>
```

JSON format
```sh
gendiff --format json <name of file1> <name of file2>
```

## 👀 Demonstration

### Installation:
[![asciicast](https://asciinema.org/a/vc6HDhcnYMRVV91BY4wqD0FYY.svg)](https://asciinema.org/a/vc6HDhcnYMRVV91BY4wqD0FYY)

### Compare "flat" json-files in defaul format:

<a href="https://asciinema.org/a/bP5auqO2kJtH4S1b2zbB6xCDs" target="_blank"><img src="https://github.com/aspogorelova/frontend-project-46/blob/main/1.jpg"></a>

### Compare "flat" yaml-files in default format: 
<a href="https://asciinema.org/a/rX6pKMHgnPCm63rWG5WAl2BJP" target="_blank"><img src="https://github.com/aspogorelova/frontend-project-46/blob/main/2.jpg"></a>

### Compare nested files json and yaml in default format:  
<a href="https://asciinema.org/a/lgfeQ7oE9UAcesTJmCKyPOF0I" target="_blank"><img src="https://github.com/aspogorelova/frontend-project-46/blob/main/3.jpg"></a>

### Compare nested files json and yaml in plain format:  
<a href="https://asciinema.org/a/oWCxB866gdoV0WFL8UTtIbxIZ" target="_blank"><img src="https://github.com/aspogorelova/frontend-project-46/blob/main/4.jpg"></a>

### Compare nested files yaml and json in json format:  
<a href="https://asciinema.org/a/ZRuRhhLrCHzOlwyuFkIY6quvf" target="_blank"><img src="https://github.com/aspogorelova/frontend-project-46/blob/main/5.jpg"></a>
