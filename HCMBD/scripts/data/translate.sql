

BEGIN TRY

MERGE INTO [Translate] AS Target
USING (VALUES
  (N'ca-ES',N'Sin departamento',N'Sense departament',N'Templates',1)
 ,(N'ca-ES',N'Sin teléfono',N'Sense telèfon',N'Templates',1)
 ,(N'en-GB',N'Sin departamento',N'No department',N'Templates',1)
 ,(N'en-GB',N'Sin teéfono',N'No phone',N'Templates',1)
 ,(N'en-GB',N'Sin teléfono',N'No phone',N'Templates',1)
) AS Source ([CultureId],[Original],[Text],[Area],[OriginId])
ON (Target.[CultureId] = Source.[CultureId] AND Target.[Original] = Source.[Original] AND Target.[Area] = Source.[Area])
WHEN MATCHED AND (
	NULLIF(Source.[Text], Target.[Text]) IS NOT NULL OR NULLIF(Target.[Text], Source.[Text]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Text] = Source.[Text], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([CultureId],[Original],[Text],[Area],[OriginId])
 VALUES(Source.[CultureId],Source.[Original],Source.[Text],Source.[Area],Source.[OriginId])
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





