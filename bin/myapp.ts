#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MyappStack } from "../lib/myapp-stack";

const app = new cdk.App();

new MyappStack(app, "LambdaPOC");
