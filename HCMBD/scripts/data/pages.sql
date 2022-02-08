

BEGIN TRY

MERGE INTO [Pages] AS Target
USING (VALUES
  (N'hcm_employees_list',N'list',NULL,NULL,N'default',N'Employees List',N'employees',N'Employees List',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
) AS Source ([PageName],[TypeId],[ObjectName],[InterfaceName],[LayoutName],[Name],[IconName],[Descrip],[UrlRewrite],[Script],[ScriptActive],[Style],[RefreshInterval],[Sytem],[Generic],[BodyCssClass],[Offline],[OriginId])
ON (Target.[PageName] = Source.[PageName])
WHEN MATCHED AND (
	NULLIF(Source.[TypeId], Target.[TypeId]) IS NOT NULL OR NULLIF(Target.[TypeId], Source.[TypeId]) IS NOT NULL OR 
	NULLIF(Source.[ObjectName], Target.[ObjectName]) IS NOT NULL OR NULLIF(Target.[ObjectName], Source.[ObjectName]) IS NOT NULL OR 
	NULLIF(Source.[InterfaceName], Target.[InterfaceName]) IS NOT NULL OR NULLIF(Target.[InterfaceName], Source.[InterfaceName]) IS NOT NULL OR 
	NULLIF(Source.[LayoutName], Target.[LayoutName]) IS NOT NULL OR NULLIF(Target.[LayoutName], Source.[LayoutName]) IS NOT NULL OR 
	NULLIF(Source.[Name], Target.[Name]) IS NOT NULL OR NULLIF(Target.[Name], Source.[Name]) IS NOT NULL OR 
	NULLIF(Source.[IconName], Target.[IconName]) IS NOT NULL OR NULLIF(Target.[IconName], Source.[IconName]) IS NOT NULL OR 
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[UrlRewrite], Target.[UrlRewrite]) IS NOT NULL OR NULLIF(Target.[UrlRewrite], Source.[UrlRewrite]) IS NOT NULL OR 
	NULLIF(Source.[Script], Target.[Script]) IS NOT NULL OR NULLIF(Target.[Script], Source.[Script]) IS NOT NULL OR 
	NULLIF(Source.[ScriptActive], Target.[ScriptActive]) IS NOT NULL OR NULLIF(Target.[ScriptActive], Source.[ScriptActive]) IS NOT NULL OR 
	NULLIF(Source.[Style], Target.[Style]) IS NOT NULL OR NULLIF(Target.[Style], Source.[Style]) IS NOT NULL OR 
	NULLIF(Source.[RefreshInterval], Target.[RefreshInterval]) IS NOT NULL OR NULLIF(Target.[RefreshInterval], Source.[RefreshInterval]) IS NOT NULL OR 
	NULLIF(Source.[Sytem], Target.[Sytem]) IS NOT NULL OR NULLIF(Target.[Sytem], Source.[Sytem]) IS NOT NULL OR 
	NULLIF(Source.[Generic], Target.[Generic]) IS NOT NULL OR NULLIF(Target.[Generic], Source.[Generic]) IS NOT NULL OR 
	NULLIF(Source.[BodyCssClass], Target.[BodyCssClass]) IS NOT NULL OR NULLIF(Target.[BodyCssClass], Source.[BodyCssClass]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [TypeId] = Source.[TypeId], 
  [ObjectName] = Source.[ObjectName], 
  [InterfaceName] = Source.[InterfaceName], 
  [LayoutName] = Source.[LayoutName], 
  [Name] = Source.[Name], 
  [IconName] = Source.[IconName], 
  [Descrip] = Source.[Descrip], 
  [UrlRewrite] = Source.[UrlRewrite], 
  [Script] = Source.[Script], 
  [ScriptActive] = Source.[ScriptActive], 
  [Style] = Source.[Style], 
  [RefreshInterval] = Source.[RefreshInterval], 
  [Sytem] = Source.[Sytem], 
  [Generic] = Source.[Generic], 
  [BodyCssClass] = Source.[BodyCssClass], 
  [Offline] = Source.[Offline], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([PageName],[TypeId],[ObjectName],[InterfaceName],[LayoutName],[Name],[IconName],[Descrip],[UrlRewrite],[Script],[ScriptActive],[Style],[RefreshInterval],[Sytem],[Generic],[BodyCssClass],[Offline],[OriginId])
 VALUES(Source.[PageName],Source.[TypeId],Source.[ObjectName],Source.[InterfaceName],Source.[LayoutName],Source.[Name],Source.[IconName],Source.[Descrip],Source.[UrlRewrite],Source.[Script],Source.[ScriptActive],Source.[Style],Source.[RefreshInterval],Source.[Sytem],Source.[Generic],Source.[BodyCssClass],Source.[Offline],Source.[OriginId])
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





