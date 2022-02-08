

BEGIN TRY

MERGE INTO [Objects_Views] AS Target
USING (VALUES
  (N'employee',N'employeeDefaultList',N'employeeDefaultList',N'DataConnectionString',N' SELECT [Employees].[IdEmployee], [Employees].[IdEmployee] as [IdEmployee_1], [Employees].[DocumentType] as [DocumentType], [Employees].[IdDocument] as [IdDocument], [Employees].[Address] as [Address], [Employees].[PostalCode] as [PostalCode], [Employees].[Town] as [Town], [Employees].[Country] as [Country], [Employees].[Province] as [Province], [Employees].[Email] as [Email], [Employees].[PhonePrefix] as [PhonePrefix], [Employees].[PersonalPhone] as [PersonalPhone], [Employees].[Birthday] as [Birthday], [Employees].[DrivingLicense] as [DrivingLicense], [Employees].[OwnVehicle] as [OwnVehicle], [Employees].[Photo] as [Photo], [Employees].[WorkPhone] as [WorkPhone], [Employees].[WorkEmail] as [WorkEmail], [Employees].[Department] as [Department], [Employees].[Role] as [Role], [Employees].[Name] as [Name], [Employees].[Surname] as [Surname] FROM [Employees] 

',0,1,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'employee',N'hcm_v_employee_list',N'Employee Card',N'DataConnectionString',N'SELECT IdEmployee,Name,Surname,IdDocument,Address,PostalCode,Town,Province,Country,Email,WorkEmail,PhonePrefix,PersonalPhone,WorkPhone,Birthday,DrivingLicense,OwnVehicle,Photo,Department,Role
,Employees.IdState
,es.Descrip as State
FROM Employees
LEFT JOIN Employees_States es on es.IdState=Employees.IdState',0,0,1,0,1,NULL,0,NULL,NULL,1)
) AS Source ([ObjectName],[ViewName],[Descrip],[ConnStringId],[SQLSentence],[NoFilter],[ShowAsGrid],[Active],[System],[IsDefault],[OrderBy],[Offline],[PrimaryKeys],[IndexFields],[OriginId])
ON (Target.[ObjectName] = Source.[ObjectName] AND Target.[ViewName] = Source.[ViewName])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[ConnStringId], Target.[ConnStringId]) IS NOT NULL OR NULLIF(Target.[ConnStringId], Source.[ConnStringId]) IS NOT NULL OR 
	NULLIF(Source.[SQLSentence], Target.[SQLSentence]) IS NOT NULL OR NULLIF(Target.[SQLSentence], Source.[SQLSentence]) IS NOT NULL OR 
	NULLIF(Source.[NoFilter], Target.[NoFilter]) IS NOT NULL OR NULLIF(Target.[NoFilter], Source.[NoFilter]) IS NOT NULL OR 
	NULLIF(Source.[ShowAsGrid], Target.[ShowAsGrid]) IS NOT NULL OR NULLIF(Target.[ShowAsGrid], Source.[ShowAsGrid]) IS NOT NULL OR 
	NULLIF(Source.[Active], Target.[Active]) IS NOT NULL OR NULLIF(Target.[Active], Source.[Active]) IS NOT NULL OR 
	NULLIF(Source.[System], Target.[System]) IS NOT NULL OR NULLIF(Target.[System], Source.[System]) IS NOT NULL OR 
	NULLIF(Source.[IsDefault], Target.[IsDefault]) IS NOT NULL OR NULLIF(Target.[IsDefault], Source.[IsDefault]) IS NOT NULL OR 
	NULLIF(Source.[OrderBy], Target.[OrderBy]) IS NOT NULL OR NULLIF(Target.[OrderBy], Source.[OrderBy]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[PrimaryKeys], Target.[PrimaryKeys]) IS NOT NULL OR NULLIF(Target.[PrimaryKeys], Source.[PrimaryKeys]) IS NOT NULL OR 
	NULLIF(Source.[IndexFields], Target.[IndexFields]) IS NOT NULL OR NULLIF(Target.[IndexFields], Source.[IndexFields]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip], 
  [ConnStringId] = Source.[ConnStringId], 
  [SQLSentence] = Source.[SQLSentence], 
  [NoFilter] = Source.[NoFilter], 
  [ShowAsGrid] = Source.[ShowAsGrid], 
  [Active] = Source.[Active], 
  [System] = Source.[System], 
  [IsDefault] = Source.[IsDefault], 
  [OrderBy] = Source.[OrderBy], 
  [Offline] = Source.[Offline], 
  [PrimaryKeys] = Source.[PrimaryKeys], 
  [IndexFields] = Source.[IndexFields], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([ObjectName],[ViewName],[Descrip],[ConnStringId],[SQLSentence],[NoFilter],[ShowAsGrid],[Active],[System],[IsDefault],[OrderBy],[Offline],[PrimaryKeys],[IndexFields],[OriginId])
 VALUES(Source.[ObjectName],Source.[ViewName],Source.[Descrip],Source.[ConnStringId],Source.[SQLSentence],Source.[NoFilter],Source.[ShowAsGrid],Source.[Active],Source.[System],Source.[IsDefault],Source.[OrderBy],Source.[Offline],Source.[PrimaryKeys],Source.[IndexFields],Source.[OriginId])
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





