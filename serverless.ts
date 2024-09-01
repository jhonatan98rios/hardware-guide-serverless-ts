import type { AWS } from '@serverless/typescript';

import smart from '@functions/smart';
import content from '@functions/content';
import products from '@functions/products';

const serverlessConfiguration: AWS = {
  service: 'hardware-guide-serverless-ts',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths

  layers: {
    CommonLibs: {
      path: "./layer/nodejs",
      compatibleRuntimes: [
        'nodejs18.x'
      ]
    }
  },

  functions: { smart, content, products },
  package: { 
    individually: true,
    excludeDevDependencies: true,
    exclude: [
      "node_modules/**",
      "test/**",
      "docs/**",
      "src/**/tests/**",
      "src/mock/**"
    ]
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: false,
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    "serverless-offline": {
      httpPort: 5000
    }
  },
};

module.exports = serverlessConfiguration;
