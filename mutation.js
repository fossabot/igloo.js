// programmatically generated file

const gql = require("graphql-tag")

module.exports = class Mutation {
    constructor(client) {
        this.client = client
    }

    async verifyPassword ({ email, password } ) {
        if(email === undefined) throw new Error('email is a required argument')
        const email_arg = `email:"${email}",`
        if(password === undefined) throw new Error('password is a required argument')
        const password_arg = `password:"${password}",`
        
        return this.client.mutate({ mutation:gql(`mutation{verifyPassword(${email_arg}${password_arg})}`) }).then(res=>res.data.verifyPassword)
        }
    
    async verifyWebAuthn ({ challengeResponse, jwtChallenge } ) {
        if(challengeResponse === undefined) throw new Error('challengeResponse is a required argument')
        const challengeResponse_arg = `challengeResponse:"${challengeResponse}",`
        if(jwtChallenge === undefined) throw new Error('jwtChallenge is a required argument')
        const jwtChallenge_arg = `jwtChallenge:"${jwtChallenge}",`
        
        return this.client.mutate({ mutation:gql(`mutation{verifyWebAuthn(${challengeResponse_arg}${jwtChallenge_arg})}`) }).then(res=>res.data.verifyWebAuthn)
        }
    
    async verifyTotp ({ email, code } ) {
        
        const email_arg = email ? `email:"${email}",` : ''
        const code_arg = code ? `code:"${code}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{verifyTotp(${email_arg}${code_arg})}`) }).then(res=>res.data.verifyTotp)
        }
    
    async verifyEmailToken ({ token } ) {
        if(token === undefined) throw new Error('token is a required argument')
        const token_arg = `token:"${token}",`
        
        return this.client.mutate({ mutation:gql(`mutation{verifyEmailToken(${token_arg})}`) }).then(res=>res.data.verifyEmailToken)
        }
    
    async sendConfirmationEmail ({ email, operation } ) {
        if(email === undefined) throw new Error('email is a required argument')
        const email_arg = `email:"${email}",`
        if(operation === undefined) throw new Error('operation is a required argument')
        const operation_arg = `operation:${operation},`
        
        return this.client.mutate({ mutation:gql(`mutation{sendConfirmationEmail(${email_arg}${operation_arg})}`) }).then(res=>res.data.sendConfirmationEmail)
        }
    
    async logIn ({ passwordCertificate, webAuthnCertificate, totpCertificate, emailCertificate } ) {
        
        const passwordCertificate_arg = passwordCertificate ? `passwordCertificate:"${passwordCertificate}",` : ''
        const webAuthnCertificate_arg = webAuthnCertificate ? `webAuthnCertificate:"${webAuthnCertificate}",` : ''
        const totpCertificate_arg = totpCertificate ? `totpCertificate:"${totpCertificate}",` : ''
        const emailCertificate_arg = emailCertificate ? `emailCertificate:"${emailCertificate}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{logIn(${passwordCertificate_arg}${webAuthnCertificate_arg}${totpCertificate_arg}${emailCertificate_arg}){id}}`) }).then(res=>res.data.logIn)
        }
    
    async createToken ({ tokenType, passwordCertificate, webAuthnCertificate, totpCertificate, emailCertificate } ) {
        if(tokenType === undefined) throw new Error('tokenType is a required argument')
        const tokenType_arg = `tokenType:${tokenType},`
        const passwordCertificate_arg = passwordCertificate ? `passwordCertificate:"${passwordCertificate}",` : ''
        const webAuthnCertificate_arg = webAuthnCertificate ? `webAuthnCertificate:"${webAuthnCertificate}",` : ''
        const totpCertificate_arg = totpCertificate ? `totpCertificate:"${totpCertificate}",` : ''
        const emailCertificate_arg = emailCertificate ? `emailCertificate:"${emailCertificate}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{createToken(${passwordCertificate_arg}${webAuthnCertificate_arg}${totpCertificate_arg}${emailCertificate_arg}${tokenType_arg})}`) }).then(res=>res.data.createToken)
        }
    
    async createPermanentToken ({ name } ) {
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        
        return this.client.mutate({ mutation:gql(`mutation{createPermanentToken(${name_arg}){id}}`) }).then(res=>res.data.createPermanentToken)
        }
    
    async regeneratePermanentToken ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{regeneratePermanentToken(${id_arg})}`) }).then(res=>res.data.regeneratePermanentToken)
        }
    
    async deletePermanentToken ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deletePermanentToken(${id_arg})}`) }).then(res=>res.data.deletePermanentToken)
        }
    
    async signUp ({ email, name } ) {
        if(email === undefined) throw new Error('email is a required argument')
        const email_arg = `email:"${email}",`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        
        return this.client.mutate({ mutation:gql(`mutation{signUp(${email_arg}${name_arg}){id}}`) }).then(res=>res.data.signUp)
        }
    
    async setPassword ({ password } ) {
        if(password === undefined) throw new Error('password is a required argument')
        const password_arg = `password:"${password}",`
        
        return this.client.mutate({ mutation:gql(`mutation{setPassword(${password_arg}){id}}`) }).then(res=>res.data.setPassword)
        }
    
    async setTotp ({ code, secret } ) {
        
        const code_arg = code ? `code:"${code}",` : ''
        const secret_arg = secret ? `secret:"${secret}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{setTotp(${code_arg}${secret_arg})}`) }).then(res=>res.data.setTotp)
        }
    
    async setWebAuthn ({ challengeResponse, jwtChallenge } ) {
        
        const challengeResponse_arg = challengeResponse ? `challengeResponse:"${challengeResponse}",` : ''
        const jwtChallenge_arg = jwtChallenge ? `jwtChallenge:"${jwtChallenge}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{setWebAuthn(${challengeResponse_arg}${jwtChallenge_arg}){id}}`) }).then(res=>res.data.setWebAuthn)
        }
    
    async changeAuthenticationSettings ({ primaryAuthenticationMethods, secondaryAuthenticationMethods } ) {
        if(primaryAuthenticationMethods === undefined) throw new Error('primaryAuthenticationMethods is a required argument')
        const primaryAuthenticationMethods_arg = `primaryAuthenticationMethods:${primaryAuthenticationMethods},`
        if(secondaryAuthenticationMethods === undefined) throw new Error('secondaryAuthenticationMethods is a required argument')
        const secondaryAuthenticationMethods_arg = `secondaryAuthenticationMethods:${secondaryAuthenticationMethods},`
        
        return this.client.mutate({ mutation:gql(`mutation{changeAuthenticationSettings(${primaryAuthenticationMethods_arg}${secondaryAuthenticationMethods_arg}){id}}`) }).then(res=>res.data.changeAuthenticationSettings)
        }
    
    async resendVerificationEmail ({ email } ) {
        if(email === undefined) throw new Error('email is a required argument')
        const email_arg = `email:"${email}",`
        
        return this.client.mutate({ mutation:gql(`mutation{resendVerificationEmail(${email_arg})}`) }).then(res=>res.data.resendVerificationEmail)
        }
    
    async shareEnvironment ({ environmentId, role, email, userId } ) {
        if(environmentId === undefined) throw new Error('environmentId is a required argument')
        const environmentId_arg = `environmentId:"${environmentId}",`
        if(role === undefined) throw new Error('role is a required argument')
        const role_arg = `role:${role},`
        const email_arg = email ? `email:"${email}",` : ''
        const userId_arg = userId ? `userId:"${userId}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{shareEnvironment(${environmentId_arg}${email_arg}${userId_arg}${role_arg}){id}}`) }).then(res=>res.data.shareEnvironment)
        }
    
    async pendingEnvironmentShare ({ id, role } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        if(role === undefined) throw new Error('role is a required argument')
        const role_arg = `role:${role},`
        
        return this.client.mutate({ mutation:gql(`mutation{pendingEnvironmentShare(${id_arg}${role_arg}){id}}`) }).then(res=>res.data.pendingEnvironmentShare)
        }
    
    async revokePendingEnvironmentShare ({ pendingEnvironmentShareId } ) {
        if(pendingEnvironmentShareId === undefined) throw new Error('pendingEnvironmentShareId is a required argument')
        const pendingEnvironmentShareId_arg = `pendingEnvironmentShareId:"${pendingEnvironmentShareId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{revokePendingEnvironmentShare(${pendingEnvironmentShareId_arg})}`) }).then(res=>res.data.revokePendingEnvironmentShare)
        }
    
    async acceptPendingEnvironmentShare ({ pendingEnvironmentShareId } ) {
        if(pendingEnvironmentShareId === undefined) throw new Error('pendingEnvironmentShareId is a required argument')
        const pendingEnvironmentShareId_arg = `pendingEnvironmentShareId:"${pendingEnvironmentShareId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{acceptPendingEnvironmentShare(${pendingEnvironmentShareId_arg}){id}}`) }).then(res=>res.data.acceptPendingEnvironmentShare)
        }
    
    async declinePendingEnvironmentShare ({ pendingEnvironmentShareId } ) {
        if(pendingEnvironmentShareId === undefined) throw new Error('pendingEnvironmentShareId is a required argument')
        const pendingEnvironmentShareId_arg = `pendingEnvironmentShareId:"${pendingEnvironmentShareId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{declinePendingEnvironmentShare(${pendingEnvironmentShareId_arg})}`) }).then(res=>res.data.declinePendingEnvironmentShare)
        }
    
    async stopSharingEnvironment ({ environmentId, email, userId } ) {
        if(environmentId === undefined) throw new Error('environmentId is a required argument')
        const environmentId_arg = `environmentId:"${environmentId}",`
        const email_arg = email ? `email:"${email}",` : ''
        const userId_arg = userId ? `userId:"${userId}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{stopSharingEnvironment(${environmentId_arg}${email_arg}${userId_arg}){id}}`) }).then(res=>res.data.stopSharingEnvironment)
        }
    
    async leaveEnvironment ({ environmentId } ) {
        if(environmentId === undefined) throw new Error('environmentId is a required argument')
        const environmentId_arg = `environmentId:"${environmentId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{leaveEnvironment(${environmentId_arg})}`) }).then(res=>res.data.leaveEnvironment)
        }
    
    async changeOwner ({ environmentId, email, userId } ) {
        if(environmentId === undefined) throw new Error('environmentId is a required argument')
        const environmentId_arg = `environmentId:"${environmentId}",`
        const email_arg = email ? `email:"${email}",` : ''
        const userId_arg = userId ? `userId:"${userId}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{changeOwner(${environmentId_arg}${email_arg}${userId_arg}){id}}`) }).then(res=>res.data.changeOwner)
        }
    
    async revokePendingOwnerChange ({ pendingOwnerChangeId } ) {
        if(pendingOwnerChangeId === undefined) throw new Error('pendingOwnerChangeId is a required argument')
        const pendingOwnerChangeId_arg = `pendingOwnerChangeId:"${pendingOwnerChangeId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{revokePendingOwnerChange(${pendingOwnerChangeId_arg})}`) }).then(res=>res.data.revokePendingOwnerChange)
        }
    
    async acceptPendingOwnerChange ({ pendingOwnerChangeId } ) {
        if(pendingOwnerChangeId === undefined) throw new Error('pendingOwnerChangeId is a required argument')
        const pendingOwnerChangeId_arg = `pendingOwnerChangeId:"${pendingOwnerChangeId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{acceptPendingOwnerChange(${pendingOwnerChangeId_arg}){id}}`) }).then(res=>res.data.acceptPendingOwnerChange)
        }
    
    async declinePendingOwnerChange ({ pendingOwnerChangeId } ) {
        if(pendingOwnerChangeId === undefined) throw new Error('pendingOwnerChangeId is a required argument')
        const pendingOwnerChangeId_arg = `pendingOwnerChangeId:"${pendingOwnerChangeId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{declinePendingOwnerChange(${pendingOwnerChangeId_arg})}`) }).then(res=>res.data.declinePendingOwnerChange)
        }
    
    async changeRole ({ environmentId, email, newRole } ) {
        if(environmentId === undefined) throw new Error('environmentId is a required argument')
        const environmentId_arg = `environmentId:"${environmentId}",`
        if(email === undefined) throw new Error('email is a required argument')
        const email_arg = `email:"${email}",`
        if(newRole === undefined) throw new Error('newRole is a required argument')
        const newRole_arg = `newRole:${newRole},`
        
        return this.client.mutate({ mutation:gql(`mutation{changeRole(${environmentId_arg}${email_arg}${newRole_arg}){id}}`) }).then(res=>res.data.changeRole)
        }
    
    async createEnvironment ({ name, picture, index, muted } ) {
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const picture_arg = picture ? `picture:${picture},` : ''
        const index_arg = index ? `index:${index},` : ''
        const muted_arg = muted ? `muted:${muted},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createEnvironment(${name_arg}${picture_arg}${index_arg}${muted_arg}){id}}`) }).then(res=>res.data.createEnvironment)
        }
    
    async createDevice ({ deviceType, firmware } ) {
        
        const deviceType_arg = deviceType ? `deviceType:"${deviceType}",` : ''
        const firmware_arg = firmware ? `firmware:"${firmware}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{createDevice(${deviceType_arg}${firmware_arg}){id}}`) }).then(res=>res.data.createDevice)
        }
    
    async claimDevice ({ claimCode, name, environmentId, index, muted } ) {
        if(claimCode === undefined) throw new Error('claimCode is a required argument')
        const claimCode_arg = `claimCode:"${claimCode}",`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        if(environmentId === undefined) throw new Error('environmentId is a required argument')
        const environmentId_arg = `environmentId:"${environmentId}",`
        const index_arg = index ? `index:${index},` : ''
        const muted_arg = muted ? `muted:${muted},` : ''
        return this.client.mutate({ mutation:gql(`mutation{claimDevice(${claimCode_arg}${name_arg}${index_arg}${environmentId_arg}${muted_arg}){id}}`) }).then(res=>res.data.claimDevice)
        }
    
    async createNotification ({ deviceId, content, date } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(content === undefined) throw new Error('content is a required argument')
        const content_arg = `content:"${content}",`
        const date_arg = date ? `date:${date},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createNotification(${deviceId_arg}${content_arg}${date_arg}){id}}`) }).then(res=>res.data.createNotification)
        }
    
    async uploadFileValue ({ id, file } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const file_arg = file ? `file:${file},` : ''
        return this.client.mutate({ mutation:gql(`mutation{uploadFileValue(${id_arg}${file_arg})}`) }).then(res=>res.data.uploadFileValue)
        }
    
    async createFloatValue ({ deviceId, permission, name, visibility, unitOfMeasurement, value, precision, min, max, cardSize, index } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(permission === undefined) throw new Error('permission is a required argument')
        const permission_arg = `permission:${permission},`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const unitOfMeasurement_arg = unitOfMeasurement ? `unitOfMeasurement:"${unitOfMeasurement}",` : ''
        const value_arg = value ? `value:${value},` : ''
        const precision_arg = precision ? `precision:${precision},` : ''
        const min_arg = min ? `min:${min},` : ''
        const max_arg = max ? `max:${max},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createFloatValue(${deviceId_arg}${permission_arg}${visibility_arg}${unitOfMeasurement_arg}${value_arg}${precision_arg}${min_arg}${max_arg}${name_arg}${cardSize_arg}${index_arg}){id}}`) }).then(res=>res.data.createFloatValue)
        }
    
    async createFileValue ({ deviceId, permission, name, visibility, cardSize, index } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(permission === undefined) throw new Error('permission is a required argument')
        const permission_arg = `permission:${permission},`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createFileValue(${deviceId_arg}${permission_arg}${visibility_arg}${name_arg}${cardSize_arg}${index_arg}){id}}`) }).then(res=>res.data.createFileValue)
        }
    
    async createStringValue ({ deviceId, permission, name, visibility, value, maxChars, cardSize, allowedValues, index } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(permission === undefined) throw new Error('permission is a required argument')
        const permission_arg = `permission:${permission},`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const value_arg = value ? `value:"${value}",` : ''
        const maxChars_arg = maxChars ? `maxChars:${maxChars},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const allowedValues_arg = allowedValues ? `allowedValues:${allowedValues},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createStringValue(${deviceId_arg}${permission_arg}${visibility_arg}${value_arg}${maxChars_arg}${name_arg}${cardSize_arg}${allowedValues_arg}${index_arg}){id}}`) }).then(res=>res.data.createStringValue)
        }
    
    async createBooleanValue ({ deviceId, permission, name, visibility, value, cardSize, index } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(permission === undefined) throw new Error('permission is a required argument')
        const permission_arg = `permission:${permission},`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const value_arg = value ? `value:${value},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createBooleanValue(${deviceId_arg}${permission_arg}${visibility_arg}${value_arg}${name_arg}${cardSize_arg}${index_arg}){id}}`) }).then(res=>res.data.createBooleanValue)
        }
    
    async createFloatSeriesValue ({ deviceId, name, visibility, unitOfMeasurement, precision, min, max, cardSize, threshold, index } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const unitOfMeasurement_arg = unitOfMeasurement ? `unitOfMeasurement:"${unitOfMeasurement}",` : ''
        const precision_arg = precision ? `precision:${precision},` : ''
        const min_arg = min ? `min:${min},` : ''
        const max_arg = max ? `max:${max},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const threshold_arg = threshold ? `threshold:${threshold},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createFloatSeriesValue(${deviceId_arg}${visibility_arg}${unitOfMeasurement_arg}${precision_arg}${min_arg}${max_arg}${name_arg}${cardSize_arg}${threshold_arg}${index_arg}){id}}`) }).then(res=>res.data.createFloatSeriesValue)
        }
    
    async createFloatSeriesNode ({ seriesId, value, timestamp } ) {
        if(seriesId === undefined) throw new Error('seriesId is a required argument')
        const seriesId_arg = `seriesId:"${seriesId}",`
        if(value === undefined) throw new Error('value is a required argument')
        const value_arg = `value:${value},`
        const timestamp_arg = timestamp ? `timestamp:${timestamp},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createFloatSeriesNode(${seriesId_arg}${timestamp_arg}${value_arg}){id}}`) }).then(res=>res.data.createFloatSeriesNode)
        }
    
    async createCategorySeriesValue ({ deviceId, name, visibility, cardSize, allowedValues, index } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(name === undefined) throw new Error('name is a required argument')
        const name_arg = `name:"${name}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const allowedValues_arg = allowedValues ? `allowedValues:${allowedValues},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createCategorySeriesValue(${deviceId_arg}${visibility_arg}${name_arg}${cardSize_arg}${allowedValues_arg}${index_arg}){id}}`) }).then(res=>res.data.createCategorySeriesValue)
        }
    
    async createCategorySeriesNode ({ seriesId, value, timestamp } ) {
        if(seriesId === undefined) throw new Error('seriesId is a required argument')
        const seriesId_arg = `seriesId:"${seriesId}",`
        if(value === undefined) throw new Error('value is a required argument')
        const value_arg = `value:"${value}",`
        const timestamp_arg = timestamp ? `timestamp:${timestamp},` : ''
        return this.client.mutate({ mutation:gql(`mutation{createCategorySeriesNode(${seriesId_arg}${timestamp_arg}${value_arg}){id}}`) }).then(res=>res.data.createCategorySeriesNode)
        }
    
    async user ({ quietMode, devMode, name } ) {
        
        const quietMode_arg = quietMode ? `quietMode:${quietMode},` : ''
        const devMode_arg = devMode ? `devMode:${devMode},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{user(${quietMode_arg}${devMode_arg}${name_arg}){id}}`) }).then(res=>res.data.user)
        }
    
    async changeEmail ({ newEmail } ) {
        if(newEmail === undefined) throw new Error('newEmail is a required argument')
        const newEmail_arg = `newEmail:"${newEmail}",`
        
        return this.client.mutate({ mutation:gql(`mutation{changeEmail(${newEmail_arg})}`) }).then(res=>res.data.changeEmail)
        }
    
    async settings ({ language, lengthAndMass, temperature, dateFormat, timeFormat, passwordChangeEmail, pendingOwnerChangeReceivedEmail, pendingEnvironmentShareReceivedEmail, pendingOwnerChangeAcceptedEmail, pendingEnvironmentShareAcceptedEmail, permanentTokenCreatedEmail } ) {
        
        const language_arg = language ? `language:"${language}",` : ''
        const lengthAndMass_arg = lengthAndMass ? `lengthAndMass:${lengthAndMass},` : ''
        const temperature_arg = temperature ? `temperature:${temperature},` : ''
        const dateFormat_arg = dateFormat ? `dateFormat:${dateFormat},` : ''
        const timeFormat_arg = timeFormat ? `timeFormat:${timeFormat},` : ''
        const passwordChangeEmail_arg = passwordChangeEmail ? `passwordChangeEmail:${passwordChangeEmail},` : ''
        const pendingOwnerChangeReceivedEmail_arg = pendingOwnerChangeReceivedEmail ? `pendingOwnerChangeReceivedEmail:${pendingOwnerChangeReceivedEmail},` : ''
        const pendingEnvironmentShareReceivedEmail_arg = pendingEnvironmentShareReceivedEmail ? `pendingEnvironmentShareReceivedEmail:${pendingEnvironmentShareReceivedEmail},` : ''
        const pendingOwnerChangeAcceptedEmail_arg = pendingOwnerChangeAcceptedEmail ? `pendingOwnerChangeAcceptedEmail:${pendingOwnerChangeAcceptedEmail},` : ''
        const pendingEnvironmentShareAcceptedEmail_arg = pendingEnvironmentShareAcceptedEmail ? `pendingEnvironmentShareAcceptedEmail:${pendingEnvironmentShareAcceptedEmail},` : ''
        const permanentTokenCreatedEmail_arg = permanentTokenCreatedEmail ? `permanentTokenCreatedEmail:${permanentTokenCreatedEmail},` : ''
        return this.client.mutate({ mutation:gql(`mutation{settings(${language_arg}${lengthAndMass_arg}${temperature_arg}${dateFormat_arg}${timeFormat_arg}${passwordChangeEmail_arg}${pendingOwnerChangeReceivedEmail_arg}${pendingEnvironmentShareReceivedEmail_arg}${pendingOwnerChangeAcceptedEmail_arg}${pendingEnvironmentShareAcceptedEmail_arg}${permanentTokenCreatedEmail_arg}){id}}`) }).then(res=>res.data.settings)
        }
    
    async updatePaymentInfo ({ stripeToken } ) {
        if(stripeToken === undefined) throw new Error('stripeToken is a required argument')
        const stripeToken_arg = `stripeToken:"${stripeToken}",`
        
        return this.client.mutate({ mutation:gql(`mutation{updatePaymentInfo(${stripeToken_arg})}`) }).then(res=>res.data.updatePaymentInfo)
        }
    
    async environment ({ id, name, picture, index, muted } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const name_arg = name ? `name:"${name}",` : ''
        const picture_arg = picture ? `picture:${picture},` : ''
        const index_arg = index ? `index:${index},` : ''
        const muted_arg = muted ? `muted:${muted},` : ''
        return this.client.mutate({ mutation:gql(`mutation{environment(${id_arg}${name_arg}${picture_arg}${index_arg}${muted_arg}){id}}`) }).then(res=>res.data.environment)
        }
    
    async device ({ id, deviceType, name, index, signalStatus, batteryStatus, batteryCharging, firmware, muted, starred } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const deviceType_arg = deviceType ? `deviceType:"${deviceType}",` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const index_arg = index ? `index:${index},` : ''
        const signalStatus_arg = signalStatus ? `signalStatus:${signalStatus},` : ''
        const batteryStatus_arg = batteryStatus ? `batteryStatus:${batteryStatus},` : ''
        const batteryCharging_arg = batteryCharging ? `batteryCharging:${batteryCharging},` : ''
        const firmware_arg = firmware ? `firmware:"${firmware}",` : ''
        const muted_arg = muted ? `muted:${muted},` : ''
        const starred_arg = starred ? `starred:${starred},` : ''
        return this.client.mutate({ mutation:gql(`mutation{device(${id_arg}${deviceType_arg}${name_arg}${index_arg}${signalStatus_arg}${batteryStatus_arg}${batteryCharging_arg}${firmware_arg}${muted_arg}${starred_arg}){id}}`) }).then(res=>res.data.device)
        }
    
    async value ({ id, visibility, cardSize, name, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{value(${id_arg}${visibility_arg}${cardSize_arg}${name_arg}${index_arg}){id}}`) }).then(res=>res.data.value)
        }
    
    async moveDevice ({ deviceId, newEnvironmentId } ) {
        if(deviceId === undefined) throw new Error('deviceId is a required argument')
        const deviceId_arg = `deviceId:"${deviceId}",`
        if(newEnvironmentId === undefined) throw new Error('newEnvironmentId is a required argument')
        const newEnvironmentId_arg = `newEnvironmentId:"${newEnvironmentId}",`
        
        return this.client.mutate({ mutation:gql(`mutation{moveDevice(${deviceId_arg}${newEnvironmentId_arg}){id}}`) }).then(res=>res.data.moveDevice)
        }
    
    async resetOnlineState ({ deviceId } ) {
        
        const deviceId_arg = deviceId ? `deviceId:"${deviceId}",` : ''
        return this.client.mutate({ mutation:gql(`mutation{resetOnlineState(${deviceId_arg}){id}}`) }).then(res=>res.data.resetOnlineState)
        }
    
    async floatValue ({ id, permission, visibility, unitOfMeasurement, value, precision, min, max, name, cardSize, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const permission_arg = permission ? `permission:${permission},` : ''
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const unitOfMeasurement_arg = unitOfMeasurement ? `unitOfMeasurement:"${unitOfMeasurement}",` : ''
        const value_arg = value ? `value:${value},` : ''
        const precision_arg = precision ? `precision:${precision},` : ''
        const min_arg = min ? `min:${min},` : ''
        const max_arg = max ? `max:${max},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{floatValue(${id_arg}${permission_arg}${visibility_arg}${unitOfMeasurement_arg}${value_arg}${precision_arg}${min_arg}${max_arg}${name_arg}${cardSize_arg}${index_arg}){id}}`) }).then(res=>res.data.floatValue)
        }
    
    async atomicUpdateFloat ({ id, incrementBy } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        if(incrementBy === undefined) throw new Error('incrementBy is a required argument')
        const incrementBy_arg = `incrementBy:${incrementBy},`
        
        return this.client.mutate({ mutation:gql(`mutation{atomicUpdateFloat(${id_arg}${incrementBy_arg}){id}}`) }).then(res=>res.data.atomicUpdateFloat)
        }
    
    async stringValue ({ id, permission, visibility, value, maxChars, name, cardSize, allowedValues, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const permission_arg = permission ? `permission:${permission},` : ''
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const value_arg = value ? `value:"${value}",` : ''
        const maxChars_arg = maxChars ? `maxChars:${maxChars},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const allowedValues_arg = allowedValues ? `allowedValues:${allowedValues},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{stringValue(${id_arg}${permission_arg}${visibility_arg}${value_arg}${maxChars_arg}${name_arg}${cardSize_arg}${allowedValues_arg}${index_arg}){id}}`) }).then(res=>res.data.stringValue)
        }
    
    async booleanValue ({ id, permission, visibility, value, name, cardSize, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const permission_arg = permission ? `permission:${permission},` : ''
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const value_arg = value ? `value:${value},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{booleanValue(${id_arg}${permission_arg}${visibility_arg}${value_arg}${name_arg}${cardSize_arg}${index_arg}){id}}`) }).then(res=>res.data.booleanValue)
        }
    
    async fileValue ({ id, permission, visibility, name, cardSize, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const permission_arg = permission ? `permission:${permission},` : ''
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{fileValue(${id_arg}${permission_arg}${visibility_arg}${name_arg}${cardSize_arg}${index_arg}){id}}`) }).then(res=>res.data.fileValue)
        }
    
    async floatSeriesValue ({ id, visibility, unitOfMeasurement, precision, min, max, name, cardSize, threshold, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const unitOfMeasurement_arg = unitOfMeasurement ? `unitOfMeasurement:"${unitOfMeasurement}",` : ''
        const precision_arg = precision ? `precision:${precision},` : ''
        const min_arg = min ? `min:${min},` : ''
        const max_arg = max ? `max:${max},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const threshold_arg = threshold ? `threshold:${threshold},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{floatSeriesValue(${id_arg}${visibility_arg}${unitOfMeasurement_arg}${precision_arg}${min_arg}${max_arg}${name_arg}${cardSize_arg}${threshold_arg}${index_arg}){id}}`) }).then(res=>res.data.floatSeriesValue)
        }
    
    async floatSeriesNode ({ id, value, timestamp } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const value_arg = value ? `value:${value},` : ''
        const timestamp_arg = timestamp ? `timestamp:${timestamp},` : ''
        return this.client.mutate({ mutation:gql(`mutation{floatSeriesNode(${id_arg}${value_arg}${timestamp_arg}){id}}`) }).then(res=>res.data.floatSeriesNode)
        }
    
    async categorySeriesValue ({ id, visibility, name, cardSize, allowedValues, index } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const visibility_arg = visibility ? `visibility:${visibility},` : ''
        const name_arg = name ? `name:"${name}",` : ''
        const cardSize_arg = cardSize ? `cardSize:${cardSize},` : ''
        const allowedValues_arg = allowedValues ? `allowedValues:${allowedValues},` : ''
        const index_arg = index ? `index:${index},` : ''
        return this.client.mutate({ mutation:gql(`mutation{categorySeriesValue(${id_arg}${visibility_arg}${name_arg}${cardSize_arg}${allowedValues_arg}${index_arg}){id}}`) }).then(res=>res.data.categorySeriesValue)
        }
    
    async categorySeriesNode ({ id, value, timestamp } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const value_arg = value ? `value:"${value}",` : ''
        const timestamp_arg = timestamp ? `timestamp:${timestamp},` : ''
        return this.client.mutate({ mutation:gql(`mutation{categorySeriesNode(${id_arg}${value_arg}${timestamp_arg}){id}}`) }).then(res=>res.data.categorySeriesNode)
        }
    
    async notification ({ id, content, read } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        const content_arg = content ? `content:"${content}",` : ''
        const read_arg = read ? `read:${read},` : ''
        return this.client.mutate({ mutation:gql(`mutation{notification(${id_arg}${content_arg}${read_arg}){id}}`) }).then(res=>res.data.notification)
        }
    
    async deleteNotification ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deleteNotification(${id_arg})}`) }).then(res=>res.data.deleteNotification)
        }
    
    async deleteValue ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deleteValue(${id_arg})}`) }).then(res=>res.data.deleteValue)
        }
    
    async deleteDevice ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deleteDevice(${id_arg})}`) }).then(res=>res.data.deleteDevice)
        }
    
    async unclaimDevice ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{unclaimDevice(${id_arg}){id}}`) }).then(res=>res.data.unclaimDevice)
        }
    
    async deleteEnvironment ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deleteEnvironment(${id_arg})}`) }).then(res=>res.data.deleteEnvironment)
        }
    
    async deleteUser ({  } ) {
        
        
        return this.client.mutate({ mutation:gql(`mutation{deleteUser()}`) }).then(res=>res.data.deleteUser)
        }
    
    async deleteFloatSeriesNode ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deleteFloatSeriesNode(${id_arg})}`) }).then(res=>res.data.deleteFloatSeriesNode)
        }
    
    async deleteCategorySeriesNode ({ id } ) {
        if(id === undefined) throw new Error('id is a required argument')
        const id_arg = `id:"${id}",`
        
        return this.client.mutate({ mutation:gql(`mutation{deleteCategorySeriesNode(${id_arg})}`) }).then(res=>res.data.deleteCategorySeriesNode)
        }
    }