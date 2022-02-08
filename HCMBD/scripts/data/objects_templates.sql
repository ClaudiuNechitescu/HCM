

BEGIN TRY

MERGE INTO [Objects_Templates] AS Target
USING (VALUES
  (N'hcm_t_employees_list',N'employee',N'list',N'Employees List',N'<div class="col-4 col-l-6 col-m-6 col-s-12 pp-employee-card">

  <div class="row pp_flex-wrap pp-border-hover padding-l col-12">
    <div class="col-3 col-m-3 col-s-12 text-center pp_align-items-middle" title={{IdEmployee}} style="height: 100px;">
      <img id="{{IdEmployee}}" style="max-height: 100px;" src="{{Photo|isnull:./img/Avatars/avatar_blank.png,{{Photo|url}}}}" class="img-responsive img-rounded"/>      
    </div>
    <flx-navbutton class="pp_flex-wrap col-7 col-m-7 col-s-6 iflex-text-s-center" type="openpage" pagetypeid="view" objectname="employee" objectwhere="(Employees.IdEmployee={{IdEmployee}})" defaults="" targetid="current" excludehist="false">
      <div class="col-12 col-m-12 col-s-12 margin-left-l">
        <h3>
          <span class="{{IdEstado|switch:[-1:text-muted, else:txt-outstanding]}}">{{Name}} {{Surname}}<small class="txt-danger"> {{IdState|switch:[-1:({{State}}),else:]}}</small></span>
        </h3>   
        <ul class="list-unstyled margin-bottom-0">
          <li class="margin-bottom-s"><a title="{{translate|Email}}" class="text-muted" href="{{WorkEmail|isnull:javascript:void,mailto:{{WorkEmail}}}}"><i class="flx-icon icon-email icon-margin-right "></i>{{WorkEmail|isnull:{{translate|Sin correo}}}}</a></li>
          <li class="margin-bottom-s"><a title="{{translate|Teléfono de trabajo}}" class="text-muted" href="{{WorkPhone|isnull:javascript:void,tel:{{WorkPhone}}}}"><i class="flx-icon icon-phone icon-margin-right " ></i>{{WorkPhone|isnull:{{translate|Sin teléfono}}}}</a></li>
          <li class="margin-bottom-s"><div title="{{translate|Departamento}}" class="text-muted"><i class="flx-icon icon-departments-2 icon-margin-right " ></i>{{Department|isnull:{{translate|Sin departamento}}}}</div></li>
        </ul>
      </div>	
    </flx-navbutton>
    <div>
      <div class="col-12 col-m-12 col-s-12 text-right padding-right-0 iflex-top-right">{{objectmenu}}</div>
    </div>
  </div>
</div>
',N'hcm_v_employee_list',NULL,N'<script>
    ' + convert(nvarchar(max),NCHAR(36)) + N'(''flx-navbutton a'').click(function(e) {
        e.stopPropagation();
    });
</script>
<div class="margin-top-l">',N'</div>',NULL,NULL,1,0,0,1,1)
) AS Source ([TemplateId],[ObjectName],[TypeId],[Descrip],[Body],[ViewName],[WhereSentence],[Header],[Footer],[Empty],[ModuleClass],[IsDefault],[Offline],[UserDefinedGroups],[Active],[OriginId])
ON (Target.[TemplateId] = Source.[TemplateId])
WHEN MATCHED AND (
	NULLIF(Source.[ObjectName], Target.[ObjectName]) IS NOT NULL OR NULLIF(Target.[ObjectName], Source.[ObjectName]) IS NOT NULL OR 
	NULLIF(Source.[TypeId], Target.[TypeId]) IS NOT NULL OR NULLIF(Target.[TypeId], Source.[TypeId]) IS NOT NULL OR 
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[Body], Target.[Body]) IS NOT NULL OR NULLIF(Target.[Body], Source.[Body]) IS NOT NULL OR 
	NULLIF(Source.[ViewName], Target.[ViewName]) IS NOT NULL OR NULLIF(Target.[ViewName], Source.[ViewName]) IS NOT NULL OR 
	NULLIF(Source.[WhereSentence], Target.[WhereSentence]) IS NOT NULL OR NULLIF(Target.[WhereSentence], Source.[WhereSentence]) IS NOT NULL OR 
	NULLIF(Source.[Header], Target.[Header]) IS NOT NULL OR NULLIF(Target.[Header], Source.[Header]) IS NOT NULL OR 
	NULLIF(Source.[Footer], Target.[Footer]) IS NOT NULL OR NULLIF(Target.[Footer], Source.[Footer]) IS NOT NULL OR 
	NULLIF(Source.[Empty], Target.[Empty]) IS NOT NULL OR NULLIF(Target.[Empty], Source.[Empty]) IS NOT NULL OR 
	NULLIF(Source.[ModuleClass], Target.[ModuleClass]) IS NOT NULL OR NULLIF(Target.[ModuleClass], Source.[ModuleClass]) IS NOT NULL OR 
	NULLIF(Source.[IsDefault], Target.[IsDefault]) IS NOT NULL OR NULLIF(Target.[IsDefault], Source.[IsDefault]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[UserDefinedGroups], Target.[UserDefinedGroups]) IS NOT NULL OR NULLIF(Target.[UserDefinedGroups], Source.[UserDefinedGroups]) IS NOT NULL OR 
	NULLIF(Source.[Active], Target.[Active]) IS NOT NULL OR NULLIF(Target.[Active], Source.[Active]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ObjectName] = Source.[ObjectName], 
  [TypeId] = Source.[TypeId], 
  [Descrip] = Source.[Descrip], 
  [Body] = Source.[Body], 
  [ViewName] = Source.[ViewName], 
  [WhereSentence] = Source.[WhereSentence], 
  [Header] = Source.[Header], 
  [Footer] = Source.[Footer], 
  [Empty] = Source.[Empty], 
  [ModuleClass] = Source.[ModuleClass], 
  [IsDefault] = Source.[IsDefault], 
  [Offline] = Source.[Offline], 
  [UserDefinedGroups] = Source.[UserDefinedGroups], 
  [Active] = Source.[Active], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([TemplateId],[ObjectName],[TypeId],[Descrip],[Body],[ViewName],[WhereSentence],[Header],[Footer],[Empty],[ModuleClass],[IsDefault],[Offline],[UserDefinedGroups],[Active],[OriginId])
 VALUES(Source.[TemplateId],Source.[ObjectName],Source.[TypeId],Source.[Descrip],Source.[Body],Source.[ViewName],Source.[WhereSentence],Source.[Header],Source.[Footer],Source.[Empty],Source.[ModuleClass],Source.[IsDefault],Source.[Offline],Source.[UserDefinedGroups],Source.[Active],Source.[OriginId])
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





