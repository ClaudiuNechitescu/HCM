

BEGIN TRY

MERGE INTO [Objects_Views_Properties] AS Target
USING (VALUES
  (N'employee',N'employeeDefaultList',N'employee',N'Address',N'employee',3,N'Address',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Birthday',N'employee',11,N'Birthday',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Country',N'employee',6,N'Country',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Department',N'employee',17,N'Department',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'DocumentType',N'employee',1,N'DocumentType',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'DrivingLicense',N'employee',12,N'DrivingLicense',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Email',N'employee',8,N'Email',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'IdDocument',N'employee',2,N'IdDocument',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'IdEmployee',N'employee',0,N'IdEmployee_1',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Name',N'employee',19,N'Name',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'OwnVehicle',N'employee',13,N'OwnVehicle',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'PersonalPhone',N'employee',10,N'PersonalPhone',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'PhonePrefix',N'employee',9,N'PhonePrefix',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Photo',N'employee',14,N'Photo',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'PostalCode',N'employee',4,N'PostalCode',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Province',N'employee',7,N'Province',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Role',N'employee',18,N'Role',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Surname',N'employee',20,N'Surname',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'Town',N'employee',5,N'Town',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'WorkEmail',N'employee',16,N'WorkEmail',1)
 ,(N'employee',N'employeeDefaultList',N'employee',N'WorkPhone',N'employee',15,N'WorkPhone',1)
) AS Source ([ObjectName],[ViewName],[ObjectPropertyName],[PropertyName],[ObjectPath],[Order],[Label],[OriginId])
ON (Target.[ObjectName] = Source.[ObjectName] AND Target.[ViewName] = Source.[ViewName] AND Target.[ObjectPropertyName] = Source.[ObjectPropertyName] AND Target.[PropertyName] = Source.[PropertyName])
WHEN MATCHED AND (
	NULLIF(Source.[ObjectPath], Target.[ObjectPath]) IS NOT NULL OR NULLIF(Target.[ObjectPath], Source.[ObjectPath]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[Label], Target.[Label]) IS NOT NULL OR NULLIF(Target.[Label], Source.[Label]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ObjectPath] = Source.[ObjectPath], 
  [Order] = Source.[Order], 
  [Label] = Source.[Label], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([ObjectName],[ViewName],[ObjectPropertyName],[PropertyName],[ObjectPath],[Order],[Label],[OriginId])
 VALUES(Source.[ObjectName],Source.[ViewName],Source.[ObjectPropertyName],Source.[PropertyName],Source.[ObjectPath],Source.[Order],Source.[Label],Source.[OriginId])
WHEN NOT MATCHED BY SOURCE AND TARGET.OriginId = 1 THEN 
 DELETE
;
END TRY
BEGIN CATCH
    DECLARE @ERRORNUMBER	INT,@ERRORMSG		VARCHAR(MAX),@ERRORSTATE		INT
    SELECT @ERRORNUMBER = 50000 + ERROR_NUMBER(),@ERRORMSG = ERROR_MESSAGE(), @ERRORSTATE = ERROR_STATE();
    THROW @ERRORNUMBER, @ERRORMSG, @ERRORSTATE
END CATCH
GO





