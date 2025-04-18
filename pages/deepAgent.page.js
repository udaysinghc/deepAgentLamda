// class DeepAgentPage {
//   constructor(page) {
//     this.page = page;
//     this.chekoutButton = page.locator(
//       '//button[contains(text(), "Check it out")]'
//     );
//     this.searchPromaptTextArea=page.locator('textarea[dir*="auto"]');
//     this.sendButton = page.locator('button [data-icon*="paper-plane"]');
//     this.maxLimitTask=page.locator("[class*='space-y-2 flex flex-col items-center']")
//     this.stopButton=page.locator('[class*="animate-spin"]');
//     this.specifyTextField=page.locator('textarea[placeholder*="Specify any updates"]');
//     this.statusOftask = page.locator('//div[contains(text(), "Completed")]');
//     // this.responseContainer =page.locator('//p[contains(text(),"doing well, thank you for asking")]')
//     this.computePoint=page.locator('div[class*="underline cursor-pointer"]');
  

 

//   }
//   async clickCheckoutButton() {
//     await this.chekoutButton.waitFor({ state: "visible" });
//     await this.chekoutButton.click();
//   }

//   async enterPromapt(promat_user_search){
//     await this.searchPromaptTextArea.fill(promat_user_search);
//   }

//   async enterPromaptQuery(follow_up_query){
//     await this.specifyTextField.click();
//     await this.specifyTextField.fill(follow_up_query);
//   }

//   async clickSendButton() {
//     await this.sendButton.waitFor({ state: "visible" });
//     await this.sendButton.click();
// }

// async waitforStopButtonInvisble() {
//     await this.stopButton.waitFor({ 
//         state: "hidden",
//         timeout: 240000  // 4 minutes
//     });
//     await this.stopButton.waitFor({ state: "hidden" });
// }


// async getStatusOfTask(expectedStatus) {
//     try {
//         // Wait for the status to be visible with a reasonable timeout
//         await this.statusOftask.waitFor({ state: 'visible', timeout: 10000 });
//         const actualStatus = await this.statusOftask.textContent();
        
//         console.log('\n=== Task Status Details ===');
//         console.log(`Expected Status: ${expectedStatus}`);
//         console.log(`Actual Status: ${actualStatus.trim()}`);
//         console.log(`Status Match: ${actualStatus.trim() === expectedStatus}`);
//         console.log('========================\n');
        
//         return actualStatus.trim() === expectedStatus;
//     } catch (error) {
//         console.error('\n=== Task Status Error ===');
//         console.error(`Expected Status: ${expectedStatus}`);
//         console.error('Actual Status: Not Found');
//         console.error(`Error Message: ${error.message}`);
//         console.error('========================\n');
//         return false;
//     }
// }

// // async getResponseText() {
// //   await this.responseContainer.waitFor({ state: "visible", timeout: 10000 });
// //     const text = await this.responseContainer.textContent();
// //     return text.trim();
   
// // }

// async getComputePoint() {
//   await this.computePoint.waitFor({ state: "visible" });
//   const pointsText = await this.computePoint.textContent();
//   // Extract numeric value from format "Compute Points Used: 541"
//   const points = parseInt(pointsText.replace("Compute Points Used:", "").trim());
//   return points;
// }

// }


// module.exports = { DeepAgentPage };

